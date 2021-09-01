# Ledger project

## Background
Alcove's property managers are paid by Alcove for each of their properties. Each individual payment owed is called a "Charge". Charges are viewable on the "Ledger", and are grouped into "Ledger Items".

A Ledger Item only contains charges for a single building, and only charges which are due on the same day. 

The Ledger can be used to show items for a single building, or can show items for all buildings on a given user account.

![Screenshot of ledger](/image.png)

## Task
This project implements two things:
- A GET endpoint for viewing ledger items
- A Cron job for processing ledger items