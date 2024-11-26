function skillsMember() {
  let member = document.querySelector(".member");
  let memberSkills = document.querySelector(".member-skills");
  let memberSkillsList = document.querySelector(".member-skills-list");
  let memberSkillsClose = document.querySelector(".member-skills-close");

  if (member) {
    member.addEventListener("click", function() {
      memberSkills.style.display = "flex";
    });

    memberSkillsClose.addEventListener("click", function() {
      memberSkills.style.display = "none";
    });

    memberSkillsList.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        memberSkills.style.display = "none";
      }
    });
  }
}