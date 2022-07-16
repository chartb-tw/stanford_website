const colleges = [];

class CollegeSet {
  constructor(collegeName, isPublic, minSAT, maxSAT, maxTuition) {
    this.collegeName = collegeName;
    this.isPublic = Boolean(isPublic);
    this.minSAT = Number(minSAT);
    this.maxSAT = Number(maxSAT);
    this.maxTuition = Number(maxTuition);
  }

  checkSAT(min = -Infinity, max = Infinity) {
    if (min > max) {
      return false;
    }
    return this.minSAT >= min && this.maxSAT <= max;
  }

  checkTuition(tutor) {
    return this.maxTuition <= tutor;
  }

  checkCollegeType(choice) {
    switch (choice) {
      case "public":
        return this.isPublic;
      case "private":
        return !this.isPublic;
      case "indifferent":
        return true;
      default:
        console.log("Check the radio box options vs the ones in this function");
        return false;
    }
  }
}

/*
 * details on whether the colleges are random or not were randomly selected,
 * and may not reflect reality.
 */

colleges.push(new CollegeSet("Stanford", true, 1380, 1570, 44757));
colleges.push(new CollegeSet("Mills College", false, 1040, 1250, 42918));
colleges.push(new CollegeSet("UC Berkeley", true, 1250, 1500, 13844));
colleges.push(new CollegeSet("UC Santa Cruz", true, 1000, 1280, 13398));
colleges.push(new CollegeSet("USF", false, 1070, 1270, 41450));
colleges.push(new CollegeSet("SCU", false, 1190, 1380, 43812));

function updateSearchForm() {
  const collegeForm = document.forms["college-search"];
  let output = "";

  const maxTuition = collegeForm["max-tuition"].value
    ? Number(collegeForm["max-tuition"].value)
    : Infinity;
  const maxSat = collegeForm["maxsat"].value
    ? Number(collegeForm["maxsat"].value)
    : Infinity;
  const minSat = collegeForm["minsat"].value
    ? Number(collegeForm["minsat"].value)
    : -Infinity;

  for (let i = 0; i < colleges.length; i++) {
    if (
      colleges[i].checkCollegeType(collegeForm["typeof-college"].value) &&
      colleges[i].checkSAT(minSat, maxSat) &&
      colleges[i].checkTuition(maxTuition)
    ) {
      output += `<tr>
            <td>${colleges[i].collegeName}</td>
            <td>${colleges[i].maxSAT}</td>
            <td>${colleges[i].minSAT}</td>
            <td>${colleges[i].maxTuition}</td>
        </tr>\n`;
    }
  }
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML =
    output !== ""
      ? output
      : "<tr><td colspan='4'>No matching colleges found</td></tr>";
}
