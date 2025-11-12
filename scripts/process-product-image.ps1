<#
PowerShell helper: process-product-image.ps1

Usage examples (PowerShell):

# 1) Using ImageMagick (recommended for quick background removal when background is mostly uniform):
# .\scripts\process-product-image.ps1 -InputPath "C:\Users\dhili\Downloads\graphic-illustration-light-blue-wallpaper-template-website-cover-background-design_545033-2371.jpg" -OutputPath "C:\Users\dhili\OneDrive\Desktop\analyzebiotect2\public\images\product-processed.png" -Method ImageMagick

# 2) Using rembg (Python package) for better background removal (install rembg first):
# pip install rembg
# .\scripts\process-product-image.ps1 -InputPath "C:\Users\dhili\Downloads\...jpg" -OutputPath "C:\Users\dhili\OneDrive\Desktop\analyzebiotect2\public\images\product-processed.png" -Method rembg

Parameters:
-InputPath: full path to your source image (JPEG/PNG).
-OutputPath: full path for the produced PNG (should end with .png).
-Method: 'ImageMagick' or 'rembg' (default ImageMagick).
-Fuzz: (optional) percent fuzz for ImageMagick background color tolerance (default 20%%).

Notes:
- This script runs locally. It does not call any external network services.
- For best results removing complex shadows, use rembg (Python). ImageMagick is quick and works well for uniform backgrounds.
#>
param(
    [Parameter(Mandatory=$true)] [string]$InputPath,
    [Parameter(Mandatory=$true)] [string]$OutputPath,
    [ValidateSet('ImageMagick','rembg')] [string]$Method = 'ImageMagick',
    [int]$Fuzz = 20
)

function Test-Command($cmd) {
    $path = (Get-Command $cmd -ErrorAction SilentlyContinue).Path
    return -not [string]::IsNullOrEmpty($path)
}

if ($Method -eq 'ImageMagick') {
    if (-not (Test-Command magick)) {
        Write-Error "ImageMagick 'magick' command not found. Install ImageMagick and ensure 'magick' is on PATH: https://imagemagick.org"
        exit 2
    }

    # Strategy:
    # 1) Try to make the most common background color transparent with a fuzz tolerance.
    # 2) Convert to PNG and optimize.

    $fuzzStr = "$Fuzz%"
    Write-Host "Running ImageMagick background transparency (fuzz=$fuzzStr) ..."

    # Attempt to remove typical white-ish background and any near-white using -fuzz and -transparent
    & magick "$InputPath" -alpha set -fuzz $fuzzStr -transparent white "$OutputPath"

    if ($LASTEXITCODE -ne 0) {
        Write-Error "ImageMagick command failed (exit $LASTEXITCODE)."
        exit 3
    }

    Write-Host "Saved processed image to: $OutputPath"
    exit 0
}

if ($Method -eq 'rembg') {
    # rembg is a Python package. Check for rembg executable.
    if (Test-Command rembg) {
        Write-Host "Using rembg CLI to remove background..."
        & rembg i "$InputPath" "$OutputPath"
        if ($LASTEXITCODE -ne 0) {
            Write-Error "rembg CLI failed (exit $LASTEXITCODE)."
            exit 4
        }
        Write-Host "Saved processed image to: $OutputPath"
        exit 0
    }

    # If rembg CLI not found, try python -m rembg
    if (Test-Command python) {
        Write-Host "Trying 'python -m rembg'..."
        & python -m rembg i "$InputPath" "$OutputPath"
        if ($LASTEXITCODE -ne 0) {
            Write-Error "python -m rembg failed (exit $LASTEXITCODE). Install rembg via 'pip install rembg'."
            exit 5
        }
        Write-Host "Saved processed image to: $OutputPath"
        exit 0
    }

    Write-Error "rembg not found. Install Python and run 'pip install rembg', or use ImageMagick method instead."
    exit 6
}
