import app from "./express";

import routeNotFound from "./middleware/notFound";
import errorHandler from "./middleware/errorHandler";

import authRouter from "./routes/auth.routes";
import patientRouter from "./routes/patient.routes";

app.use("/api/auth", authRouter);
app.use("/api/patients", patientRouter);

app.use(routeNotFound);
app.use(errorHandler);

export default app;
