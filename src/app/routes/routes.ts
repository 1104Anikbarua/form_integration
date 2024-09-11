import express from 'express';
import { formIntegrationRoutes } from '../modules/formDataIntegration/formDataIntegration.route';

const router = express.Router();

router.use('/form', formIntegrationRoutes);

export const globalRoutes = router;
