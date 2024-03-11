## Aprendizados

:heavy_check_mark: React Router v6+ no DOM

No App.js

`import {BrowserRouter, Routes, Route} from react-router-dom';`
 
O componente **Navbar** tem elementos que se repetem em todas as páginas e tem elementos que estão em 'Routes', logo fica dentro de 'BrowserRouter'.

```
<BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
</BrowserRouter>
```

Dentro da pasta pages :file_folder: e no arquivo :page_with_curl: Home.js

```
const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <GetInTouch />
    </>

  )
}
```


Dentro do componente **Navbar**:

```
import { Link } from 'react-router-dom';

const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'orange', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"

                >
                    AquaPure
                </Typography>
                
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
```



:heavy_check_mark: Utilização de sx e breakpoints em Material UI

O que é [sx](https://mui.com/system/getting-started/the-sx-prop/)?


```
<Box component='article'>
    sx={{
        px: 4,
    }}
</Box>


<Grid item xs={12} sm={4} md={6}>
    sx={{
        order: {xs: 4, sm: 4, md: 3}
    }}
</Grid>
```


:heavy_check_mark: Uso de Componentes reutilizáveis em React;

Conteúdo do componente Title:

```
import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
   }}
    >
      {text}
    </Typography>
  )
}

export default Title;
```


:heavy_check_mark: Utilização de Styled-Components com Material UI

Personlizar o 'Box' 

```
const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));
```



:heavy_check_mark: Design responsivo e mobile first;

[Uso de Grid no Material UI](https://mui.com/material-ui/react-grid/)

```react
<Grid item xs={12} sm={4} md={6}>
    <img src={imgDetail} alt="" 
    style={{
        width: '100%',
    }}
    />
</Grid>
```


:heavy_check_mark: Uso de Menu mobile com MUI (Drawer)

[Drawer para usod e menu Mobile/Hamburguer](https://mui.com/material-ui/react-drawer/)




## Dependências

- [Material UI v5](https://www.npmjs.com/package/@mui/material) - Pacotes de utilidades de CSS para layouts.

` npm install @mui/material @emotion/react @emotion/styled `


- [react router v6+]("react-router-dom": "^6.6.1") - Pacote para usar React Router em aplicativos Web.

`npm i react-router-dom`


- [react responsive carousel v3.2+](https://www.npmjs.com/package/react-responsive-carousel) - Carousel responsivo e customizável para galeria de iamgens.

`npm i react-responsive-carousel`


- [react animation](https://www.npmjs.com) - Animação de Componentes


##  

### Instalar dependências

`npm install`

### Rodar aplicação

`npm start`

Abra o link [http://localhost:3000](http://localhost:3000) 

### Criar pasta build

`npm run build`

### Testar aplicação:

`npm test`
