ENV=/home/ubuntu/env/bin/activate
APPNAME=tokenview
APPDIR=/home/ubuntu/WandX-TokenView/

LOGFILE=$APPDIR'gunicorn.log'
ERRORFILE=$APPFIR'gunicorn-error.log'

NUM_WORKERS=3

ADDRESS=127.0.0.1:8000

source $ENV
cd $APPDIR

exec gunicorn $APPNAME.wsgi:application \
-w $NUM_WORKERS --bind=$ADDRESS \
--log-level=debug \
--log-file=$LOGFILE 2>>$LOGFILE  1>>$ERRORFILE &