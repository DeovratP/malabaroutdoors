@echo off
REM  Malabar Outdoors - photo rescue (batch version, uses Windows built-in curl)
REM  Put this file NEXT TO index.html and double-click it.
REM  It creates an images\ folder and downloads all 25 photos into it.

setlocal
set BASE=https://malabaroutdoors.wordpress.com/wp-content/uploads
mkdir images 2>nul

for %%F in (
    "2021/12/img_20201022_084226.jpg"
    "2021/12/boati.jpg"
    "2021/12/food.jpg"
    "2021/12/road.jpg"
    "2021/12/brg.jpg"
    "2021/12/chipi.jpg"
    "2021/05/kokan.jpg"
    "2021/05/collage.jpg"
    "2022/04/img_20200822_184640.jpg"
    "2022/04/img_20190612_163006.jpg"
    "2022/04/img-20180801-wa0004.jpg"
    "2022/04/1title.jpg"
    "2022/04/sher1.jpg"
    "2022/04/work-1.jpg"
    "2022/04/trail1.jpg"
    "2022/04/harihar.jpg"
    "2022/04/lohgad.jpg"
    "2022/04/full2.jpg"
    "2023/04/mb1.jpg"
    "2023/04/gp.jpg"
    "2023/04/mr.jpg"
    "2025/07/img-20250715-wa00201024.jpg"
    "2025/07/picture1.jpg"
    "2025/07/picture2.jpg"
    "2025/07/deovratmap2.jpg"
) do (
    for %%N in ("%%~F") do (
        echo Downloading %%~nxN ...
        curl -sSL -o "images\%%~nxN" "%BASE%/%%~F"
    )
)

echo.
echo ==============================================
echo  Finished. Checking results...
echo ==============================================
set COUNT=0
for %%G in (images\*.jpg) do set /a COUNT+=1
echo  %COUNT% of 25 photos are in the images folder.
echo  (If fewer than 25: check your internet, or tell Claude which are missing.)
echo.
pause
