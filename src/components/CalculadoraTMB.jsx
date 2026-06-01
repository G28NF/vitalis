import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'
import { Gauge } from "@mui/x-charts/Gauge";


export default function calculadoraTMB(){
    const [peso, setpeso] = React.useState('');
    const [altura, setaltura] = React.useState('');
    const [idade, setIdade] = React.useState('')
    const [sexo, setSexo] = React.useState('')

    const calculadoraTMB = () => {
        if(!peso || !altura || !idade || !sexo)
            Swal.fire('Preencha todos os campos!')
        return;
    }
     //função de calculo do TMB pros 2 sexos
    let tmb = 0;
    if(sexo == 'masculino') {
        tmb = (13.7 * peso) + (5 * altura) - (6.8 * idade) + 66;
    }
    else {
        tmb = (9.6 * peso) + (1.8 * altura) - (4.7 * idade) + 655
         }


         //formulário TMB
     <Box component="form" onSubmit={calculadoraTMB} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField
          label="Peso (kg)"
          variant="outlined"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
          fullWidth
          inputProps={{ step: '0.1' }}
        />
        <TextField
          label="Altura (cm)"
          variant="outlined"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
          fullWidth
        />
        <TextField
        select
        label="Sexo"
        fullWidth
        margin="normal"
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
      >
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="feminino">Feminino</MenuItem>
      </TextField>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1, py: 1.5, backgroundColor: '#CC1F1F', '&:hover': { backgroundColor: '#b01919' } }}>
          Calcular TMB
        </Button>
      </Box>
      //onde é mostrado o resultado
 {tmb && (
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <Gauge
            value={tmb}
            min={1000}
            max={4000}
            width={300}
            height={200}
            valueLabelDisplay="on"
            text={({ value }) => `TMB: ${value.toFixed(0)} kcal/dia`}
          />
        </div>
      )}

}