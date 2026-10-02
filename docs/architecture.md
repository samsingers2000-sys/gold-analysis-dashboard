# Architecture

## Overview

نظام تحليل الذهب مبني على بنية ثلاثية الطبقات:

1. Frontend
   - واجهة تفاعلية للعرض والتحكم
2. Backend
   - منطق الأعمال، API، الخدمات، والمهام الخلفية
3. Data Layer
   - PostgreSQL + Redis + أنظمة التحليل ��التنبؤ

## المكونات الرئيسية

### 1) Frontend
- واجهة لوحة التحكم الرئيسية
- صفحات المراقبة
- تقارير ورسوم بيانية
- إعدادات المستخدم

### 2) Backend
- Authentication
- Market services
- Alert engine
- Report generation
- Prediction service

### 3) Data and AI
- أسعار الذهب الحالية والماضي
- النموذج التنبؤي
- المؤشرات الفنية
- سجلات الأنشطة

## التفاعل بين الطبقات

Frontend -> Backend API -> Database + Services + ML models

## أنسب تقنيات التنفيذ

- Next.js
- FastAPI / Node.js
- PostgreSQL
- Redis
- Python ML stack
