import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginatorContainer, StyledOption, StyledSelect } from './styles';

export default function BasicPagination() {
  const { fetchTransactions, transactions} = useContextSelector(
    TransactionsContext,
    (context) => ({
      fetchTransactions: context.fetchTransactions,
      transactions: context.transactions,
    })
  );
  
 
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchTransactions('', page, limit);
  }, [fetchTransactions, page, limit]);

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleLimitChange = (event: any) => {
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
    setPage(1);
  };

  return (
    <>
    {transactions.length > 0 && (
      <PaginatorContainer>
        <Pagination
          count={10}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
        <StyledSelect value={limit} onChange={handleLimitChange}>
          {[5, 10, 25].map((value, index) => (
            <StyledOption key={value + index} value={value}>
              {value}
            </StyledOption>
          ))}
        </StyledSelect>
      </PaginatorContainer>
    )}
  </>
  );
}
