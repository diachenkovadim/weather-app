import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

import { Icon } from 'components/Icon';

import { ROUTES } from 'constants/routes';

const Page404: FC = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height={1} px={1}>
      <Typography variant="h3" paragraph>
        Sorry, page not found!
      </Typography>

      <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>

      <Box
        sx={{
          maxHeight: 400,
          maxWidth: 400,
          width: 1,
          height: 'auto',
          alignSelf: 'center',
          display: 'flex',
        }}
      >
        <Icon type="icon404" />
      </Box>

      <Button component={RouterLink} to={ROUTES.home} variant="contained">
        Go to Home
      </Button>
    </Stack>
  );
};

export default Page404;
