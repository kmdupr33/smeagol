import { FieldType } from "@airtable/blocks/models";

export const problemBehaviors = ["Off Task", "Fighting"];

export async function createTable(base, students) {
  const table = await base.unstable_createTableAsync("Students", [
    {
      name: "Name",
      type: FieldType.SINGLE_LINE_TEXT,
    },
    {
      name: "Problem Behaviors",
      type: FieldType.MULTIPLE_SELECTS,
      options: {
        choices: [
          ...problemBehaviors.map((behavior) => ({
            name: behavior,
          })),
        ],
      },
    },
  ]);
  await Promise.all(
    students.map(({ name, behavior }) =>
      table.createRecordsAsync([
        { Name: name, "Problem Behaviors": [{ name: behavior }] },
      ])
    )
  );
}
