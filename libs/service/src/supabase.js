const { createClient } = require('@supabase/supabase-js');
const configService = require('./../../shared/src/config/config.service');

const supabase = createClient(
  configService.get('supabase.url'),
  configService.get('supabase.key')
);

module.exports = supabase;
