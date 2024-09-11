import express from 'express';
import { formController } from './formDataIntegration.controller';

const router = express.Router();

// create form
router.post('/add-form', formController.addForm);

export const formIntegrationRoutes = router;
