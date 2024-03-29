class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  // takes in user
  showProfile(user) {
    // get user data and make template literal
    // Display profile and UI
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-lg btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-2">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank"></a>${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }



  // Show alert message
  showAlert(message, className) {
    // CLear any remaining alerts
    this.clearAlert()

    // Create div
    const div = document.createElement('div')

    // Add classes
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message))

    // Get parent to insert
    const container = document.querySelector('.searchContainer')

    // Get search box
    const search = document.querySelector('.search');

    // INSERT ALERT         insert before the search
    container.insertBefore(div, search)

    // alert timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 3000)

  }


  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    // check if theres an alert already
    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}