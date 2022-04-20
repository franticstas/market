docker exec -it market-db mongo

Узнать IP контейнера 
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' market-db