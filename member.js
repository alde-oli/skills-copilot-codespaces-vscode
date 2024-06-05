function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/skills/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}