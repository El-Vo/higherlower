# How to try out your project

To __run__ the project you need to create a .env file in the same directory as the docker-compose file containing these three variables:
```env
POSTGRES_USER=my_user
POSTGRES_PASSWORD=my_password
POSTGRES_DB=my_database
```

Now, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose up
```

In order to restart your frontend container, run this command:
```bash
docker-compose restart frontend
```

You will see console output notifying you that your API, backend, and frontend are running.

You can now navigate to your 
- `frontend` in your browser at [`http://localhost:80` (click)](http://localhost:80), 
- `backend` at [`http://localhost:5000` (click)](http://localhost:5000), 
- `postgresql` database at [`http://localhost:5432` (click)](http://localhost:5432).

In case one of the dependencies was not started, you will find error messages in the same `terminal` that was used to issue `docker compose up`

To __shut down__ the project, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose stop
```
## Danger zone
To __delete__ the docker containers, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose down
```
