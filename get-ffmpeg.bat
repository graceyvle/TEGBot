@echo off
powershell -Command "Invoke-WebRequest https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip -OutFile '%~dp0ffmpeg.zip'"
IF EXIST "%~dp0\ffmpeg.zip" (
  powershell -command "Expand-Archive -Force '%~dp0ffmpeg.zip' '%~dp0'"
  IF %ERRORLEVEL% NEQ 0 (
    echo "unzipping ffmpeg failed with code %errorlevel%."
    exit /b 2
  )
  del "%~dp0ffmpeg.zip"
  move ffmpeg* "%~dp0ffmpeg-src"
  IF %ERRORLEVEL% NEQ 0 (
    echo "renaming ffmpeg folder failed with code %errorlevel%."
    exit /b 3
  )
  move ffmpeg-src\bin\*.* "%~dp0"
  IF %ERRORLEVEL% NEQ 0 (
    echo "moving ffmpeg binaries to root folder failed with code %errorlevel%."
    exit /b 4
  )
  rmdir "%~dp0ffmpeg-src" /s /q
)
ELSE (
  echo "ffmpeg failed to download."
  exit /b 1
)
