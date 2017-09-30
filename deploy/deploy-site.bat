@echo off 

echo call aws s3 sync %~dp0..\page s3://stevielb.io/ --delete
call aws s3 sync %~dp0..\page s3://stevielb.io/ --delete
