package com.albathanext.movies.booking;

import com.albathanext.movies.MovieResult;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class BookingResult {

    @NotNull
    private MovieResult movie;

    @NotNull
    private LocalDate dateTime;

    @NotNull
    private String venu;

    private Integer numberofPerson;

}
