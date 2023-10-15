def gitUrl = 'https://github.com/mathiasscroccaro/association-frontend.git'
def gitBranch = 'main'

podTemplate(containers: [
    containerTemplate(
        name: 'kaniko', 
        image: 'gcr.io/kaniko-project/executor:v1.9.0-debug',
        command: 'sleep',
        args: '30d'
    ),
    containerTemplate(
        name: 'kubectl', 
        image: 'bitnami/kubectl:latest',
        command: 'sleep',
        args: '30d'
    )
  ]) {

    node(POD_LABEL) {
        // stage('Build') {
        //     git url: gitUrl, branch: gitBranch
        //     container('kaniko') {
        //         stage('Build image and push to registry') {
        //             sh 'ls -la'
        //             sh 'pwd'
        //             sh '''
        //             /kaniko/executor --insecure --dockerfile `pwd`/Dockerfile --context `pwd` \
        //             --destination "registry.container-registry:5000/association-frontend:latest"
        //             '''
        //         }
        //     }
        // }
        stage('Deploy') {
            git url: gitUrl, branch: gitBranch
            container('kubectl') {
                stage('Deploy to production') {
                    withCredentials([file(credentialsId: 'kubectl_config_file', variable: 'KUBECTL_CONFIG_FILE')]) {
                        sh 'cp ${KUBECTL_CONFIG_FILE} ~/.kube/config'
                        sh 'kubectl get pods -n devops-tools'
                    }
                }
            }
        }

    }
}