import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Home, Newspaper, Calculator, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#223f99' }}>
        <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              position: 'absolute', 
              left: 20, 
              fontWeight: 'bold',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Vitalis
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/" 
              startIcon={<Home size={18} />}
              sx={{ textTransform: 'none', fontSize: '1rem' }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/blog" 
              startIcon={<Newspaper size={18} />}
              sx={{ textTransform: 'none', fontSize: '1rem' }}
            >
              Blog
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/calculadora" 
              startIcon={<Calculator size={18} />}
              sx={{ textTransform: 'none', fontSize: '1rem' }}
            >
              Calculadora
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contato" 
              startIcon={<Mail size={18} />}
              sx={{ textTransform: 'none', fontSize: '1rem' }}
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
