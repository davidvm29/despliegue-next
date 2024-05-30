$start_time = Get-Date
$process = Start-Process npm -ArgumentList 'run dev' -PassThru -RedirectStandardOutput 'output.txt'
$ready = $false

while (-not $ready) {
  Start-Sleep -Seconds 1
  $content = Get-Content 'output.txt'
  $ready = $content -match 'ready - started server on 0.0.0.0:3000, url: http://localhost:3000'
}

$end_time = Get-Date
$duration = $end_time - $start_time
Write-Output "Server ready in: $($duration.Seconds) seconds"

# Clean up
Stop-Process -Id $process.Id
Remove-Item 'output.txt'
