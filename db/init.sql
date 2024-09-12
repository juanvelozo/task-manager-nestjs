--CREATE DATABASE IF NOT EXISTS task-manager-pg
SELECT 'CREATE PATABASE task-manager-pg'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'task-manager-pg')\gexec