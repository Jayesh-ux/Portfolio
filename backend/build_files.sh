pip install -r requirements.txt

echo  "make Migrations"
python3.9 manage.py makemigration --noinput
python3.9 manage.py migrate --noinput

python3.9 manage.py collectstatic --noinput