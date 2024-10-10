# How to try out your project

To __run__ the project, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose up --force-recreate
```

You will see console output notifying you that your API, backend, and frontend are running.

You can now navigate to your 
- `frontend` in your browser at [`http://localhost:80` (click)](http://localhost:80), 
- `backend` at [`http://localhost:5000` (click)](http://localhost:5000), 
- `postgresql` database at [`http://localhost:5432` (click)](http://localhost:5432).

In case one of the dependencies was not started, you will find error messages in the same `terminal` that was used to issue `docker compose up --force-recreate`

To __shut down__ the project, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose stop
```
## Danger zone
To __delete__ the docker containers, open a `terminal` in your projects root-folder and then run the following command:
```bash
docker compose down
```
