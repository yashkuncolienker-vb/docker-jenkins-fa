pipeline {
  agent any
  tools {
    nodejs "node"
  }
  environment {
    npm_config_cache = 'npm-cache'
    registry = "rkyash18/botapp"
    dockerImage = ''
    registryCredential = 'dockerhub.id'
  }
  stages {

    stage('Checkout GitSCM') {
      steps {
        checkout([$class: 'GitSCM', branches: [
          [name: '*/main']
        ], extensions: [], userRemoteConfigs: [
          [url: 'https://github.com/yashkuncolienker-vb/docker-jenkins-fa']
        ]])
      }
    }
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm run coverage'
      }
    }
    stage('Build Docker Image/Push To Dockerhub') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
          sh 'docker ps -f name=botappContainer -q | xargs --no-run-if-empty docker container stop'
          sh 'docker container ls -a -fname=botappContainer -q | xargs -r docker container rm'
          sh 'docker rmi -f $(docker images -a -q)'
        }
      }
    }
    stage('Pull from Dockerhub/Deploy locally') {
      steps {
        script {
          dockerImage = docker.image('rkyash18/botapp:$BUILD_NUMBER')
          dockerImage.run("-p 3000:3000 --rm --name botappContainer")
        }
      }

    }
  }
}