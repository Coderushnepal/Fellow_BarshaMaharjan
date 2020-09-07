export const FETCH_USER_WITH_PHONE_NUMBERS = `
SELECT
    users.id,
       users.firstname,
       users.lastname,
       users.email,
       users.is_active,
       json_strip_nulls(json_agg(
           json_build_object(
           'id', user_phone_number.id,
            'phone_number', user_phone_number.phone_number,
               'type', user_phone_number.type
           ))) AS phone_numbers
FROM users
LEFT JOIN user_phone_number on users.id = user_phone_number.user_id
WHERE users.is_active = true
GROUP BY users.id;
`;