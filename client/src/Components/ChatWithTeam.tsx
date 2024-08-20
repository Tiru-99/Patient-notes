import { Box, TextField, Button, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { FaRegComments } from 'react-icons/fa';

const ChatWithTeam = () => {
  return (
    <Box sx={{ backgroundColor: '#E1F0EC', display: 'flex', justifyContent: 'center', padding: '40px' }} className="pt-24">
      <Grid container spacing={8} maxWidth="lg">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <div className="flex flex-col text-3xl text-[#144D4D] mb-5">
            <FaRegComments className="text-4xl text-[#3B7A7A] mb-2" />
            <h2 className="text-harbor-blue font-bold">Chat with our team</h2>
          </div>
          <p className="mb-5 text-harbor-blue">
            Want to learn about PatientNotes? Need help getting started? Meet one of our team members in a quick intro call.
          </p>
          <img
            src="/doctor3.png" 
            alt="Chat with our team"
            className="w-full rounded-lg"
          />
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <div className="bg-white p-6 rounded-lg">
            <h3  className='text-[#144D4D] text-2xl font-bold pb-6'>Book a 1:1</h3>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Work Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Country" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Profession" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Practice Management System / EMR" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Approximately how many clinicians are in your practice?" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Opt-in PatientNotes emails (required for calendar invites). Read our Privacy Policy"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#3B7A7A' }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatWithTeam;
