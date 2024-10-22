# Backend Dockerfile for Java API

# Use OpenJDK runtime
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the .jar file into the container
COPY demoapi-v1.jar /app/demoapi-v1.jar

# Expose the backend port (e.g., 8080)
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "/app/demoapi-v1.jar"]

