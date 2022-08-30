import { Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, CardContent, CardHeader, Grid, Stack } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("products");
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  console.log(products);

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", width: "120%" }}
    >
      {loading ? (
        <h2>Loading ....</h2>
      ) : (
        <Grid container spacing={3}>
          {products.map((row) => (
            <Grid item xs={6} md={6} lg={3}>
              <Card className={"MuiElevatedCard--01"}>
                <CardHeader
                  className={"MuiCardHeader-root"}
                  classes={{
                    title: "MuiCardHeader-title",
                    subheader: "MuiCardHeader-subheader",
                  }}
                />
                <CardContent className={"MuiCardContent-root"}>
                  <Grid container spacing={2}>
                    <Grid item xs={8} sm={12}>
                      <Grid container>
                        <Grid container justify="space-evenly">
                          <img
                            src={row.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </Grid>

                        <Grid container>
                          <Grid container justify="space-evenly">
                            <label>{row.price}</label>
                          </Grid>
                          <Grid container justify="space-evenly">
                            {/* <label>{row.title}</label> */}
                          </Grid>
                        </Grid>

                        <Grid container justify="space-evenly">
                          <label>{row.category}</label>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success">
                  View
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
export default Products;
