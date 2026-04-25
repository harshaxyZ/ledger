Add-Type -AssemblyName System.Drawing

$base = "c:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\public"
$src = Join-Path $base "logo.png"
$img = [System.Drawing.Image]::FromFile($src)

Write-Host "Source: $($img.Width)x$($img.Height)"

# --- 192x192 ---
$bmp192 = New-Object System.Drawing.Bitmap(192, 192)
$g = [System.Drawing.Graphics]::FromImage($bmp192)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($img, 0, 0, 192, 192)
$bmp192.Save((Join-Path $base "icon-192x192.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp192.Dispose()
Write-Host "Created icon-192x192.png"

# --- 512x512 ---
$bmp512 = New-Object System.Drawing.Bitmap(512, 512)
$g = [System.Drawing.Graphics]::FromImage($bmp512)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($img, 0, 0, 512, 512)
$bmp512.Save((Join-Path $base "icon-512x512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp512.Dispose()
Write-Host "Created icon-512x512.png"

# --- Maskable 512x512 (logo at 80% centered on #121212 bg) ---
$bmpMask = New-Object System.Drawing.Bitmap(512, 512)
$g = [System.Drawing.Graphics]::FromImage($bmpMask)
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#121212")
$g.Clear($bgColor)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$padding = 51
$size = 410
$g.DrawImage($img, $padding, $padding, $size, $size)
$bmpMask.Save((Join-Path $base "icon-maskable-512x512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmpMask.Dispose()
Write-Host "Created icon-maskable-512x512.png"

$img.Dispose()
Write-Host "Done!"
