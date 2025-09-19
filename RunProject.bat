@echo off

set "CURRENT_DIR=%~dp0"
set "CURRENT_DIR=%CURRENT_DIR:~0,-1%"
cd /d "%CURRENT_DIR%"

:: awag-clientでnpm run startを新しいウィンドウで実行
start cmd /k "cd %CURRENT_DIR%\awag-client && ng serve"

:: awag-webappでmvn spring-boot:runを新しいウィンドウで実行
@REM start cmd /k "cd %CURRENT_DIR%\awag-webapp && mvn spring-boot:run"

:: edgeの新しいタブでh2-consoleを開く
@REM start microsoft-edge:http://localhost:9080/app/h2-console/

pause