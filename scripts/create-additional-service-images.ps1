# PowerShell script to create additional service section placeholder images

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

# Image 1: Certification Documents (Light sky blue theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "certification-documents.jpg") `
    -Text "Certification`nDocuments & Seals" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(173, 216, 230)) `
    -TextColor ([System.Drawing.Color]::FromArgb(10, 25, 49))

# Image 2: Training Workshop (Teal theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "training-workshop.jpg") `
    -Text "Training &`nWorkshop Session" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(74, 144, 164)) `
    -TextColor ([System.Drawing.Color]::White)

# Image 3: Library Resource Hub (Gray theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "library-resource-hub.jpg") `
    -Text "Library &`nResource Hub" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(211, 211, 211)) `
    -TextColor ([System.Drawing.Color]::FromArgb(10, 25, 49))

# Image 4: Field Service Technician (Sky blue theme)
Create-PlaceholderImage `
    -FilePath (Join-Path $imagesPath "field-service-tech.jpg") `
    -Text "Field Service`nTechnician" `
    -Width 800 `
    -Height 600 `
    -BackgroundColor ([System.Drawing.Color]::FromArgb(135, 206, 235)) `
    -TextColor ([System.Drawing.Color]::FromArgb(10, 25, 49))

Write-Host "`nAll new service images created successfully!"
