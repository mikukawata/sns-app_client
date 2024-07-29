// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// route handlers
import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, email, password } = req.body;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ data, error });
  }

  const id = data.user?.id;
  const result = await supabase
    .from('User')
    .insert([{ userid: id, username }])
    .select();
  return res.status(200).json({ data, error, result });
}
