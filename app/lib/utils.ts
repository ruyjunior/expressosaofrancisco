


export const formatCurrency = (amount: number) => {
  const newamount = amount.toLocaleString(
    'pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  );
  return newamount;
};

export const formatCPF = (cpf: string | null | undefined) => {
  if (!cpf) {
    return '';
  }
  // Remove any non-digit characters
  cpf = cpf.replace(/\D/g, '');

  // Apply the CPF mask
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
};

export const formatCNPJ = (cnpj: string | null | undefined) => {
  if (!cnpj) {
    return '';
  }
  // Remove any non-digit characters
  cnpj = cnpj.replace(/\D/g, '');

  // Apply the CNPJ mask
  cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
  cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

  return cnpj;
};

export const formatCEP = (cep: string | null | undefined) => {
  if (!cep) {
    return '';
  }
  // Remove any non-digit characters
  cep = cep.replace(/\D/g, '');

  // Apply the CEP mask
  cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');

  return cep;
};

export const formatPhone = (phone: string | null | undefined) => {
  if (!phone) return '';

  // Remove tudo que não for número
  let digits = phone.replace(/\D/g, '');

  // Remove código do país (55) se existir
  if (digits.startsWith('55') && digits.length > 11) {
    digits = digits.slice(2);
  }

  // Telefones fixos (10 dígitos) ou celulares (11 dígitos)
  if (digits.length === 10) {
    // (XX) XXXX-XXXX
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  if (digits.length === 11) {
    // (XX) XXXXX-XXXX
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  // Fallback: retorna apenas os dígitos se não bater com padrão BR
  return digits;
};

export const formatCurrencyInput = (value: string) => {
  // Remove any non-digit characters
  value = value.replace(/\D/g, '');

  // Format the value as currency
  const formattedValue = (parseInt(value) / 100).toFixed(2).replace('.', ',');

  return formattedValue;
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};