import { Button, TextField, Grid } from '@material-ui/core';
import styled from 'styled-components'
import React, {useState} from 'react';
import {FolderContent} from './models';
import FolderContentComponent from './components/FolderContent';
import FolderFormComponent from './components/FolderFom';

const AppWrapper = styled.div`
  padding: 10px;
`;

function getFolderContent(path: string): Promise<FolderContent> {
  return fetch('/api/folder-content?path=' + path).then(data => data.json());
}

function App() {
  const [lastPath, setLastPath] = useState("");
  const [folderContent, setFolderContent] = useState<FolderContent|null>(null);
 
  const handleSubmit = (path: string) => {
    setLastPath(path);
    getFolderContent(path).then((content) => {
      setFolderContent(content);
    });
  }

  return (
    <AppWrapper>
      <header>
        <p>
          Node-LS application. Allows to list files and folder available on the server. (Use . for root folder)
        </p>
      </header>
      <section>
        <Grid
            spacing={2}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
          <FolderFormComponent onSubmit={handleSubmit} />
          <Grid item>
            <FolderContentComponent path={lastPath} content={folderContent}/>
          </Grid>
        </Grid>
      </section>
    </AppWrapper>
  );
}

export default App;
