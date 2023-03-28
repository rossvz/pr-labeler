const listCurrentLabels = async (tools) => {

  const { data: labelsOnIssue } = await tools.github.issues.listLabelsOnIssue(
    {
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
    },
  );

  return labelsOnIssue

}


module.exports = listCurrentLabels;
