# Website Assistant

## Deployment
The project can be deployed using the following command: 
```bash
docker build -t website-assistant .
docker run -p 80:80 website-assistant
```
Make sure to verify the root directory and ensure it contains the necessary static files.