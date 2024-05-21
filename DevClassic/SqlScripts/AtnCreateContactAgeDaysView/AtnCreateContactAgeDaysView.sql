create or alter view AtnVwContactAgeDays
as
select Id as AtnId, Name as AtnName, BirthDate as AtnBirthDate,
datediff(day, BirthDate, getdate()) as AtnAgeDays, Id as AtnContactId
from Contact