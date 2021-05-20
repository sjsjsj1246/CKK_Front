import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const ProblemCard = () => {
  return (
    <Link to={``}>
      <Card
        sx={{
          width: '15rem',
          boxShadow: '2px 3px 10px 0px rgba(117,117,117,0.5)',
        }}
      >
        <CardActionArea>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            sx={{ color: 'gray' }}
          >
            <FavoriteBorderIcon
              sx={{
                '&: hover': {
                  transition: 'all 0.1s',
                  color: '#F7209E',
                },
              }}
            />
            <Typography
              sx={{
                margin: '0.5rem 1rem 0.5rem 0.5rem',
              }}
            >
              0
            </Typography>
          </Grid>
          <CardMedia
            sx={{ height: 250, backgroundSize: 'contain' }}
            image="https://lh3.googleusercontent.com/proxy/FY9JhY-T8MIIUfcQ88Ajo4o-26vWmtcLfE_OB1rMXHd3do3TKkLYo-W6rY_f9P8PTTBOrR2TW-iJOn-Yx5rkMG5CjKxMfZar6xKsfdQehCRflTc5DknH8F3Ppgu_x7FDqYv0Tf2dcX5QjOa3ne34dUMVEk2QRKrbx21kzDx0zrmgd7GsKhgctiilY8kwgO2qo4unTLHEs4TTpFUZVo24GuFQqFU2SKVelmWj7-wnvtSKOmw_OiUp3g50YEj-mOjMOB5BdjTo-ASj5acCyyiMs8BDsbMtAU8TqObvqdzXwfQ"
            title="엘리베이터 문제"
          />
          <CardContent>
            <Grid container>
              <Grid container item alignItems="flex-end">
                <Grid item xs={9}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: '1.1rem',
                      margin: '0',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    엘리베이터 문제
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component="p"
                    align="right"
                    sx={{ color: 'gray' }}
                  >
                    가격
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    하이
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography component="p" align="right">
                    가격
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default React.memo(ProblemCard);
