pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'Build Stage'
                sh '''
                 node --version
                 npm --version
                 npm ci
                '''
            }
        }
    }
}