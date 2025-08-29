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
        stage('Test'){
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                sh '''
                    echo 'Test Stage'
                    ls -al
                '''
            }
        }
    }
}