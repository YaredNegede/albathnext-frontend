FROM adoptopenjdk/openjdk11

LABEL maintainer="Yared Negede"

WORKDIR /albath

COPY ./target/albathanext-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

CMD ["java", "-jar","-Dspring.profiles.active=prod", "albathanext-0.0.1-SNAPSHOT.jar"]