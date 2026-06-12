import { List } from "./components/list/list";
import { ListItem } from "./components/list/list-item";
import { DocumentBlankIcon, TagIcon } from "./assets/icons";
import "./styles/styles.css";
import "./styles/pages/homepage.css";

function App() {
  const mockedDateToList = [
    {
      title: "DN02-H5300-P-XB-7102",
      description:
        "Structural analysis report for foundation bearing capacity CS-2847-HV",
      startIcon: <DocumentBlankIcon />,
    },
    {
      title: "DN02-H5300-P-XB-7103",
      description: "Overview diagram for system 77-R45 lq c789-yui-123456",
      startIcon: <DocumentBlankIcon />,
      disabled: true,
    },
    {
      title: "DN02-H5300-P-XB-7104",
      description:
        "Electrical schematic for main distribution panel MDP-5600-QX",
      startIcon: <TagIcon />,
    },
    {
      title: "DN02-H5300-P-XB-7105",
      description:
        "HVAC layout plan with thermal load distribution TLD-3245-NM",
      startIcon: <DocumentBlankIcon />,
    },
    {
      title: "DN02-H5300-P-XB-7106",
      description: "Reinforced concrete mix design specification RCM-8901-TP",
      startIcon: <TagIcon />,
      disabled: true,
    },
    {
      title: "DN02-H5300-P-XB-7107",
      description:
        "Crane load capacity certification for heavy equipment CLC-7234-RW",
      startIcon: <DocumentBlankIcon />,
    },
    {
      title: "DN02-H5300-P-XB-7108",
      description:
        "Safety compliance checklist for fall protection systems FPS-6123-KL",
      startIcon: <DocumentBlankIcon />,
    },
  ];
  return (
    <main>
      <div className='presentation-homepage'>
        <section>
          <List
            className='w-sm'
            description='Preview or add documents to board'
            title='Documents'
          >
            {mockedDateToList.map((item) => (
              <ListItem
                description={item.description}
                startIcon={item.startIcon}
                title={item.title}
                key={item.title}
                disabled={item.disabled}
                endAction={() => alert(`You clicked on ${item.title}`)}
              />
            ))}
          </List>
        </section>
        <section className='link-storybook'>
          <p>
            Give a look at the <a href='./storybook'>Storybook</a> for more
            details 😉
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
