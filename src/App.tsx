import { List } from "./components/list/list";
import { ListItem } from "./components/list/list-item";
import { DocumentBlankIcon, TagIcon } from "./assets/icons";
import "./styles/styles.css";
import "./styles/pages/homepage.css";

function App() {
  return (
    <main>
      <div className='presentation-homepage'>
        <section>
          <List
            className='max-w-sm'
            description='Preview or add documents to board'
            title='Documents'
          >
            <ListItem
              description='Structural analysis report for foundation bearing capacity CS-2847-HV'
              startIcon={<DocumentBlankIcon />}
              title='DN02-H5300-P-XB-7102'
              key='DN02-H5300-P-XB-7102'
            />
            <ListItem
              description='Overview diagram for system 77-R45 lq c789-yui-123456'
              startIcon={<DocumentBlankIcon />}
              title='DN02-H5300-P-XB-7103'
              disabled
              key='DN02-H5300-P-XB-7103'
            />
            <ListItem
              description='Electrical schematic for main distribution panel MDP-5600-QX'
              startIcon={<TagIcon />}
              title='DN02-H5300-P-XB-7104'
              key='DN02-H5300-P-XB-7104'
            />
            <ListItem
              description='HVAC layout plan with thermal load distribution TLD-3245-NM'
              startIcon={<DocumentBlankIcon />}
              title='DN02-H5300-P-XB-7105'
              key='DN02-H5300-P-XB-7105'
            />
            <ListItem
              description='Reinforced concrete mix design specification RCM-8901-TP'
              startIcon={<TagIcon />}
              title='DN02-H5300-P-XB-7106'
              key='DN02-H5300-P-XB-7106'
              disabled
            />
            <ListItem
              description='Crane load capacity certification for heavy equipment CLC-7234-RW'
              startIcon={<DocumentBlankIcon />}
              title='DN02-H5300-P-XB-7107'
              key='DN02-H5300-P-XB-7107'
            />
            <ListItem
              description='Safety compliance checklist for fall protection systems FPS-6123-KL'
              startIcon={<DocumentBlankIcon />}
              title='DN02-H5300-P-XB-7108'
              key='DN02-H5300-P-XB-7108'
            />
          </List>
        </section>
        <section className='link-storybook'>
          Give a look at the <a href='./storybook'>Storybook</a> for more
          details 😉
        </section>
      </div>
    </main>
  );
}

export default App;
