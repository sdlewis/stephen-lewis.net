@echo off 

setlocal

:main
    if "%~2" EQU "" (goto :usage)
    
    set user=%~1
    set pw=%~2
    
    set localdir=%~dp0\

    set cmd=lftp -e "set ssl:verify-certificate no;mirror  ftp://%user%:%pw%@webx15.hostica.com/stephen-lewis.net ;quit" -u %user%,%pw% webx15.hostica.com

    echo %cmd%
    pause
    call %cmd%

:usage
    echo.    %~nx0 ^<username^> ^<password^>

endlocal
