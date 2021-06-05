namespace APIFinancas.Models
{
    public class Emprestimo
    {
        public double ValorEmprestimo { get; set; }
        public int NumMeses { get; set; }
        public double TaxaPercentual { get; set; }
        public double ValorFinalComJuros { get; set; }
    }
}