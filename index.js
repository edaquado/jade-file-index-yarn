const PROJECT = "jade-file-index-yarn";
const PROFILE = "0013";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
