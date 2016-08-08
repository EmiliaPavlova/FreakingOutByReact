import React, { Component, PropTypes } from 'react';

class GitHub extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        let url=[
            {
                'id': 61199869,
                'name': 'HsuHao',
                'full_name': 'EmiliaPavlova/HsuHao',
                'owner': {
                    'login': 'EmiliaPavlova',
                    'id': 10547231,
                    'url': 'https://api.github.com/users/EmiliaPavlova',
                    'type': 'User',
                    'site_admin': false
                },
                'private': false,
                'html_url': 'https://github.com/EmiliaPavlova/HsuHao',
                'description': 'OOP Teamwork',
                'fork': false,
                'url': 'https://api.github.com/repos/EmiliaPavlova/HsuHao',
                'language': 'C#',
                'default_branch': 'master'
            },
            {
                'id': 57170233,
                'name': 'IssueTrackingSystem',
                'full_name': 'EmiliaPavlova/IssueTrackingSystem',
                'owner': {
                    'login': 'EmiliaPavlova',
                    'id': 10547231,
                    'url': 'https://api.github.com/users/EmiliaPavlova',
                    'type': 'User',
                    'site_admin': false
                },
                'private': false,
                'html_url': 'https://github.com/EmiliaPavlova/IssueTrackingSystem',
                'description': 'AngularJS SoftUni Project',
                'fork': false,
                'url': 'https://api.github.com/repos/EmiliaPavlova/IssueTrackingSystem',
                'language': 'JavaScript',
                'default_branch': 'master'
            },
            {
                'id': 30021075,
                'name': 'Java-Teamwork',
                'full_name': 'EmiliaPavlova/Java-Teamwork',
                'owner': {
                    'login': 'EmiliaPavlova',
                    'id': 10547231,
                    'url': 'https://api.github.com/users/EmiliaPavlova',
                    'type': 'User',
                    'site_admin': false
                },
                'private': false,
                'html_url': 'https://github.com/EmiliaPavlova/Java-Teamwork',
                'description': 'A Java - based game ',
                'fork': false,
                'url': 'https://api.github.com/repos/EmiliaPavlova/Java-Teamwork',
                'language': 'Java',
                'default_branch': 'master'
            }
        ];
        let urlData = url.map(function(link, i) {
            return (
              <div key={i}>
                  <p>
                    {link.description}: <span className='bold'>{link.name}</span>
                    , language: {link.language}, owner: {link.owner.login};
                  </p>
              </div>
            );
        });
        return (
          <div>
            <h3>Some GitHub Staff</h3>
            {urlData}
          </div>
        );
    }
}

export default GitHub;
