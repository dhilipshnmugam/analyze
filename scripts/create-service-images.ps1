# PowerShell script to create placeholder images for service section
# This creates simple colored placeholder images using .NET drawing libraries

Add-Type -AssemblyName System.Drawing

function Create-PlaceholderImage {
    param(
        [string]$FilePath,
        [string]$Text,
        [int]$Width = 800,
        [int]$Height = 600,
        [System.Drawing.Color]$BackgroundColor,
        [System.Drawing.Color]$TextColor
    )

    # Create bitmap
    $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Fill background
    $brush = New-Object System.Drawing.SolidBrush($BackgroundColor)
    $graphics.FillRectangle($brush, 0, 0, $Width, $Height)
    
    # Draw text
    $textBrush = New-Object System.Drawing.SolidBrush($TextColor)
    $font = New-Object System.Drawing.Font("Arial", 32, [System.Drawing.FontStyle]::Bold)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $rect = New-Object System.Drawing.RectangleF(0, 0, $Width, $Height)
    $graphics.DrawString($Text, $font, $textBrush, $rect, $format)
    
    # Save
    $bitmap.Save($FilePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    # Cleanup
    $graphics.Dispose()
    $bitmap.Dispose()
    $brush.Dispose()
    $textBrush.Dispose()
    $font.Dispose()
    
    Write-Host "Created: $FilePath"
}

$imagesPath = Join-Path $PSScriptRoot "..\public\images"

# Image 1: Technician Maintenance (Blue theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "technician-maintenance.jpg") `
    -Text "Professional Service`nTechnician at Work" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(10, 25, 49)) `
    -TextColor ([System.Drawing.Color]::White)

# Image 2: Certified Reagents (Amber theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "certified-reagents.jpg") `
    -Text "Certified Reagents`n& Consumables" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(251, 191, 36)) `
    -TextColor ([System.Drawing.Color]::FromArgb(10, 25, 49))

# Image 3: Workflow Uptime (Teal theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "workflow-uptime.jpg") `
    -Text "Maximum Uptime`nWorkflow Continuity" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(20, 184, 166)) `
    -TextColor ([System.Drawing.Color]::White)

Write-Host "`nAll service images created successfully!"
