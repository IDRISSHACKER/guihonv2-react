node{
    stage('Get Repository'){
        git 'https://github.com/IDRISSHACKER/guihonv2.git'
    }

      stage('Config ENV'){
          ansiblePlaybook(
              colorized: true,
              playbook: 'infrastructure/init.yml'
          )
      }

    stage('Run Test Unit'){
        ansiblePlaybook(
            colorized: true,
            playbook: 'infrastructure/test.yml'
        )
    }

    stage('Build Artefact'){
        ansiblePlaybook(
            colorized: true,
            playbook: 'infrastructure/build.yml'
        )
    }

    stage('Deploy Artefact'){
        ansiblePlaybook(
            colorized: true,
            playbook: 'infrastructure/deploy.yml'
        )
    }

    stage('Settings network'){
        ansiblePlaybook(
            colorized: true,
            playbook: 'infrastructure/network.yml'
        )
    }
}
